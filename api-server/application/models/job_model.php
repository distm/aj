<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Job_model extends CI_Model {
    
    function get_applicant($job_id='', $limit=25, $start=0)
    {
        if(! $job_id)
        {
            return FALSE;
        }
        
        // select field
        $select = array(
            'ja.job_apply_id, ja.seeker_id, ja.job_id, ja.date_create',
            's.first_name, s.last_name, s.email',
            'j.title AS job_title'
        );
        
        // get
        $get = $this->db->select(implode(', ', $select))
                        ->from('job_apply ja')
                        ->join('job j', 'ja.job_id=j.job_id', 'left')
                        ->join('seeker s', 'ja.seeker_id=s.seeker_id', 'left')
                        ->where('ja.job_id', $job_id)
                        ->limit($limit, $start)
                        ->get();
        
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_by_company($company_id='', $limit=25, $start=0)
    {
        if(! $company_id)
        {
            return FALSE;
        }
        
        $get = $this->db->select("*")
                        ->select("job_id AS pt_job_id")
                        ->select("(SELECT COUNT(*) FROM job_apply WHERE job_id=pt_job_id) AS noa", FALSE)
                        ->where('company_id', $company_id)
                        ->order_by('date_create', 'desc')
                        ->limit($limit, $start)
                        ->get('job');
        
        if($get && $get->num_rows()>0)
        {
            $result = array();
            foreach($get->result_array() as $row)
            {
                $row['requirement'] = json_decode($row['requirement'], TRUE);
                $row['experience'] = json_decode($row['experience'], TRUE);
                $result[] = $row;
            }
            
            return $result;
        }
        else
        {
            return FALSE;
        }
    }
    
    function total_by_company($company_id='')
    {
        if(! $company_id)
        {
            return 0;
        }
        
        return $this->db->where('company_id', $company_id)
                        ->count_all_results('job');
    }
    
}