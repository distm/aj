<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Seeker_model extends CI_Model {
    
    function get_biodata($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->limit(1)
                        ->where('seeker_id', $seeker_id)
                        ->get('seeker');
        
        return ($get && $get->num_rows()>0) ? $get->row_array() : FALSE;
    }
    
    function get_detail($seeker_id='')
    {
        return array(
            'biodata'        => $this->get_biodata($seeker_id),
            'experience'     => $this->get_experience($seeker_id),
            'language_skill' => $this->get_language_skill($seeker_id),
            'preference'     => $this->get_preference($seeker_id),
            'qualification'  => $this->get_qualification($seeker_id),
            'reference'      => $this->get_reference($seeker_id),
            'skill'          => $this->get_skill($seeker_id)
        );
    }
    
    function get_experience($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->limit(1)
                        ->where('seeker_id', $seeker_id)
                        ->get('experience');
        
        return ($get && $get->num_rows()>0) ? $get->row_array() : FALSE;
    }
    
    function get_language_skill($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->where('seeker_id', $seeker_id)
                        ->get('language');
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_preference($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->where('seeker_id', $seeker_id)
                        ->get('preference');
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_qualification($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->where('seeker_id', $seeker_id)
                        ->get('qualification');
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_reference($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->where('seeker_id', $seeker_id)
                        ->get('reference');
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_seeker($limit=25, $start=0)
    {
        // get
        $get = $this->db->limit($limit, $start)
                        ->get('seeker');
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_skill($seeker_id='')
    {
        if(! $seeker_id)
        {
            return FALSE;
        }
        
        // get
        $get = $this->db->where('seeker_id', $seeker_id)
                        ->get('skill');
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
}