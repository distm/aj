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
    
    function detail()
    {
        $seeker_id = $this->input->get('seeker_id', TRUE);
        $detail = $this->seeker_model->get_detail($seeker_id);
        
        echo '<pre>';
        print_r($detail);
        exit;
        
        if($detail)
        {
            $data = array();
            $this->response(array(
                'data' => $data
            ));
        }
        else
        {
            $this->response(array(
                'success' => $update,
                'message' => ($update !== FALSE) ? 'Update status berhasil' : 'Status gagal diupdate'
            ));
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