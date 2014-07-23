<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Company extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model(array(
            'company_model',
            'job_model'
        ));
    }
    
    function index()
    {
        $companies = $this->company_model->companies();
        $this->response(array(
            'data' => $companies,
            'total' => $this->db->count_all('company')
        ));
    }
    
    function jobs()
    {
        $start = (int)$this->input->get('start', TRUE);
        $limit = (int)$this->input->get('limit', TRUE);
        if($limit === 0)
        {
            $limit = 25;
        }
        
        $company_id = $this->input->get('company_id', TRUE);
        $jobs = $this->job_model->get_by_company($company_id, $limit, $start);
        $this->response(array(
            'data' => $jobs,
            'total' => $this->job_model->total_by_company($company_id)
        ));
    }
    
    function save()
    {
        $post_data = array(
            'name'             => $this->input->post('name', TRUE),
            'address'          => $this->input->post('address', TRUE),
            'city'             => $this->input->post('city', TRUE),
            'country'          => $this->input->post('country', TRUE),
            'phone'            => $this->input->post('phone', TRUE),
            'industry'         => $this->input->post('industry', TRUE),
            'description'      => $this->input->post('description'),
            'registrant_name'  => $this->input->post('registrant_name', TRUE),
            'registrant_email' => $this->input->post('registrant_email', TRUE)
        );
        $mode = $this->input->post('mode', TRUE);
        if($mode == 'insert')
        {
            $post_data['date_create'] = date('YmdHis');
            $save = $this->db->insert('company', $post_data);
        }
        else
        {
            $company_id = $this->input->post('company_id', TRUE);
            $save = $this->db->update('company', $post_data, array('company_id'=>$company_id));
        }
        
        $this->response(array(
            'success' => $save ? TRUE : FALSE,
            'message' => $save ? 'Data perusahaan tersimpan' : 'Data perusahaan gagal tersimpan'
        ));
    }
    
    function update_status()
    {
        $status = $this->input->post('status', TRUE);
        $company_id = $this->input->post('company_id', TRUE);
        
        $update = $this->db->update('company', array('status'=>$status), array('company_id'=>$company_id));
        echo json_encode(array(
            'success' => $update,
            'message' => ($update !== FALSE) ? 'Update status berhasil' : 'Status gagal diupdate'
        ));
    }
    
}