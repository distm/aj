<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Main extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
    }
    
    function index()
    {
        $this->response(array(
            'success' => TRUE,
            'message' => 'OK'
        ));
    }
    
    function admin_dashboard()
    {
        $this->response(array(
            'success' => TRUE,
            'message' => $this->load->view('main', '', TRUE)
        ));
    }
    
    function check_token()
    {
        $this->response(array(
            'success' => (isset($_SESSION['token']) && $_SESSION['token'] != '') ? TRUE : FALSE,
            'token' => @$_SESSION['token']
        ));
    }
    
    function login()
    {
        $u = $this->input->post('username', TRUE);
        $p = $this->input->post('password', TRUE);
        $l = $this->input->post('location', TRUE);
        
        $list = array(
            'nurhadijogja' => 'nurhadijogja',
            'adminj4c' => '65ed7f6'
        );
        
        if(isset($list[$u]) && $list[$u] == $p)
        {
            $token = md5($u.$p);
            $_SESSION['token'] = $token;
            $_SESSION['location'] = $l;
            
            $this->response(array(
                'success' => TRUE,
                'message' => 'Login sukses. Tekan OK untuk melanjutkan.',
                'token' => $token
            ));
        }
        else
        {
            $this->response(array(
                'success' => FALSE,
                'message' => 'Username dan Password tidak benar.'
            ));
        }
    }
    
}