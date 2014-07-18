<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Jobs extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model('job_model');
    }
    
    function index()
    {}
    
    function applicant()
    {
        $limit = abs((int)$this->input->get('limit', TRUE));
        $start = abs((int)$this->input->get('start', TRUE));
        
        if(! $limit)
        {
            $limit = 25;
        }
        
        $job_id = (int)$this->input->get('job_id', TRUE);
        $applicant = $this->job_model->get_applicant($job_id, $limit, $start);
        $this->response(array(
            'data' => $applicant,
            'total' => $this->db->count_all('blog')
        ));
    }
        
    function applied()
    {
        $limit = abs((int)$this->input->get('limit', TRUE));
        $start = abs((int)$this->input->get('start', TRUE));
        
        if(! $limit)
        {
            $limit = 25;
        }
        
        $seeker_id = (int)$this->input->get('seeker_id', TRUE);
        $applied = $this->job_model->get_applied($seeker_id, $limit, $start);
        
        $this->response(array(
            'data' => $applied,
            'total' => $this->job_model->total_applied($seeker_id)
        ));
    }
        
}