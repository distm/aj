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
            'data' => 'OK'
        ));
    }
    
}