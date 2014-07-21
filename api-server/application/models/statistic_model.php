<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class Statistic_model extends CI_Model {
    
    function get_count($table, $year='', $month='')
    {
        if(! $table)
        {
            return FALSE;
        }
        
        $format = !empty($month) ? "%Y-%m-%d" : "%Y-%m";
        $format_select = !empty($month) ? "%Y-%m" : "%Y";
        $like = trim("{$year}-{$month}", "-");
        
        $sql = "SELECT count(*) AS nums, date_format(date_create, '{$format}') AS period ".
               "FROM {$table} WHERE date_format(date_create, '{$format_select}')='{$like}' ".
               "GROUP BY period ORDER BY period";
        
        $get = $this->db->query($sql);
        return ($get && $get->num_rows()>0) ? $get->result_array() : FALSE;
    }
    
    function get_data($year='', $month='')
    {
        $result = array();
        
        // get count company
        $count_company = $this->get_count('company', $year, $month);
        if(is_array($count_company) && count($count_company)>0)
        {
            foreach((array)$count_company as $row)
            {
                $result[$row['period']]['company'] = $row['nums'];
            }
        }
        
        // get capunt seeker
        $count_seeker = $this->get_count('seeker', $year, $month);
        if(is_array($count_seeker) && count($count_seeker)>0)
        {
            foreach($count_seeker as $row)
            {
                $result[$row['period']]['seeker'] = $row['nums'];
            }
        }
        
        // remap data
        $data = array();
        foreach($result as $period=>$row)
        {
            $data[] = array(
                'period' => $period,
                'company' => (int)@$row['company'],
                'seeker' => (int)@$row['seeker']
            );
        }
        
        return (count($data) > 0) ? $data : FALSE;
    }
    
}