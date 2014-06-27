<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Blog_model extends CI_Model {
    
    function blog($limit=25, $start=0)
    {
        $get = $this->db->limit($limit, $start)
                        ->order_by('date_create DESC')
                        ->get('blog');
        
        return ($get && $get->num_rows()) ? $get->result_array() : FALSE;
    }
    
}