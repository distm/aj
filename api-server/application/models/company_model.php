<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Company_model extends CI_Model {
    
    function companies($limit=25, $start=0, $order_by='name')
    {
        $get = $this->db->limit($limit, $start)
                        ->order_by($order_by)
                        ->get('company');
        
        return ($get && $get->num_rows()) ? $get->result_array() : FALSE;
    }
    
}