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
            'total' => 1
        ));
    }
    
    function jobs()
    {
        $start = (int)$this->input->post('start', TRUE);
        $limit = (int)$this->input->post('limit', TRUE);
        if($limit === 0)
        {
            $limit = 25;
        }
        
        $company_id = $this->input->post('company_id', TRUE);
        $company_id = 1;
        
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
    
}