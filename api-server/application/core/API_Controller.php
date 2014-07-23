<?php

if(!defined('BASEPATH'))
    exit('No direct script access allowed');

class API_Controller extends CI_Controller {
    
    function __construct()
    {
        parent::__construct();
        
        // check host
        //if(strpos($_SERVER['HTTP_HOST'], 'api') === FALSE)
        //{
        //    show_404();
        //}
    }
    
    private function _response_array($data)
    {
        echo '<pre>';
        if(! $data)
            var_dump($data);
        else
            print_r($data);
        exit('</pre>');
    }
    
    private function _response_json($data='')
    {
        $this->output->set_content_type('application/json');
        if(! $data)
        {
            echo json_encode(array(
                'success' => FALSE,
                'message' => 'Data not found.'
            ));
        }
        else
        {
            $response = array_merge(array(
                'success' => FALSE
            ), $data);
            
            if(isset($data['success']))
            {
                unset($data['success']);
            }
            
            if(count($data) == 0)
            {
                $response['message'] = 'No data found.';
            }
            
            echo json_encode($response, 1);
        }
    }
    
    private function _response_xml($data='')
    {
        return ($data);
    }
    
    protected function response($data=array(), $format='json')
    {
        if($format === 'json')
        {
            $this->_response_json($data);
        }
        elseif($format === 'array')
        {
            $this->_response_array($data);
        }
        else
        {
            $this->_response_xml($data);
        }
    }
    
    protected function response_404()
    {
        $this->response(array(
            'success' => FALSE,
            'message' => '#404 - Not Found'
        ));
    }
    
}