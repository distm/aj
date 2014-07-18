<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Seeker extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model('seeker_model');
    }
    
    function index()
    {
        $limit = abs((int)$this->input->get('limit', TRUE));
        $start = abs((int)$this->input->get('start', TRUE));
        
        if(! $limit)
        {
            $limit = 25;
        }
        
        $seeker = $this->seeker_model->get_seeker($limit, $start);
        $this->response(array(
            'data' => $seeker,
            'total' => $this->db->count_all('seeker')
        ));
    }
    
    private function _detail_biodata()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_biodata($seeker_id);
        
        if($detail)
        {
            $data = array();
            
            $pics = $detail['pics'];
            unset($detail['pics']);
            $detail = array_merge(array('pics'=>$pics), $detail);
            
            foreach($detail as $f=>$v)
            {
                $editor = 'textfield';
                if(preg_match('/(date|dob)/i', $f))
                {
                    $editor = 'datepicker';
                }
                if(strpos($f, 'reg_') !== FALSE)
                {
                    $editor = FALSE;
                }
                if(preg_match('/(gender|searchable|status)/i', $f))
                {
                    $editor = "combo-{$f}";
                }
                
                array_push($data, array(
                    'record_id' => $detail['seeker_id'],
                    'field_name' => $f,
                    'field_value' => $v,
                    'editor' => $editor
                ));
            }
            
            $this->response(array(
                'success' => TRUE,
                'data' => $data
            ));
        }
        else
        {
            $this->response(array(
                'success' => TRUE,
                'data' => array(),
                'total' => 0
            ));
        }
    }
    
    private function _detail_experience()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_experience($seeker_id);
        
        $this->response(array(
            'success' => TRUE,
            'data' => $detail
        ));
    }
    
    private function _detail_language_skill()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_language_skill($seeker_id);
        
        $this->response(array(
            'success' => TRUE,
            'data' => $detail
        ));
    }
    
    private function _detail_preference()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_preference($seeker_id);
        
        $this->response(array(
            'success' => TRUE,
            'data' => $detail
        ));
    }
    
    private function _detail_qualification()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_qualification($seeker_id);
        
        $this->response(array(
            'success' => TRUE,
            'data' => $detail
        ));
    }
    
    private function _detail_reference()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_reference($seeker_id);
        
        $this->response(array(
            'success' => TRUE,
            'data' => $detail
        ));
    }
    
    private function _detail_skill()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_skill($seeker_id);
        
        $this->response(array(
            'success' => TRUE,
            'data' => $detail
        ));
    }
    
    function detail($task='biodata')
    {
        $method = "_detail_". preg_replace('/[^a-z]/i', '_', $task);
        if(! $task || !method_exists($this, $method))
        {
            $this->response(array(
                'success' => TRUE,
                'data' => array(),
                'total' => 0
            ));
        }
        else
        {
            $this->{$method}();
        }
    }
    
    function update_status()
    {
        $status = $this->input->post('status', TRUE);
        $seeker_id = $this->input->post('seeker_id', TRUE);
        
        $update = $this->db->update('seeker', array('status'=>$status), array('seeker_id'=>$seeker_id));
        $this->response(array(
            'success' => $update,
            'message' => ($update !== FALSE) ? 'Update status berhasil' : 'Status gagal diupdate'
        ));
    }
    
}