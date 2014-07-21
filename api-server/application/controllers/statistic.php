<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Statistic extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model('statistic_model');
    }
    
    function index()
    {}
    
    function data()
    {
        $period = $this->input->get('period', TRUE);
        $period = explode('-', $period);
        
        $year = (isset($period[1]) && $period[1] != '') ? $period[1] : date('Y');
        $month = (isset($period[0]) && $period[0] != 'all' && $period[0] != '') ? $period[0] : ($period[0] == 'all' ? '' : date('m'));
        $data = $this->statistic_model->get_data($year, $month);
        
        if($data)
        {
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
    
}