<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Blog extends API_Controller {
    
    function __construct()
    {
        parent::__construct();
        $this->load->model('blog_model');
    }
    
    function index()
    {
        $limit = abs((int)$this->input->post('limit', TRUE));
        $start = abs((int)$this->input->post('start', TRUE));
        
        if(! $limit)
        {
            $limit = 25;
        }
        
        $blog = $this->blog_model->blog($limit, $start);
        $this->response(array(
            'data' => $blog,
            'total' => $this->db->count_all('blog')
        ));
    }
    
}