<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Company extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model('company_model');
    }
    
    function index()
    {
        $companies = $this->company_model->companies();
        $this->response(array(
            'data' => $companies,
            'total' => 1
        ));
    }
    
}