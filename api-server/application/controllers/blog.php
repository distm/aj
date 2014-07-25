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
            'data' => $blog ? $blog : array(),
            'total' => $this->db->count_all('blog')
        ));
    }
    
    function delete()
    {
        $id = $this->input->post('id', TRUE);
        if($id)
        {
            $delete = $this->db->delete('blog', array('id'=>$id));
            $this->response(array(
                'success' => $delete ? TRUE : FALSE,
                'message' => $delete ? 'Blog berhasil dihapus' : 'Blog gagal dihapus'
            ));
        }
        else
        {
            $this->response(array(
                'success' => FALSE,
                'message' => 'Blog tidak dapat dihapus'
            ));
        }
    }
    
    function save()
    {
        $post_data = array(
            'title'        => $this->input->post('title', TRUE),
            'tag'          => $this->input->post('tag', TRUE),
            'summary'      => $this->input->post('summary', TRUE),
            'blog_content' => $this->input->post('blog_content')
        );
        
        $mode = $this->input->post('mode', TRUE);
        if($mode == 'update')
        {
            $id = $this->input->post('id', TRUE);
            $save = $this->db->update('blog', $post_data, array('id'=>$id));
        }
        else
        {
            $post_data['date_create'] = date('YmdHis');
            $save = $this->db->insert('blog', $post_data);
        }
        
        $this->response(array(
            'success' => $save ? TRUE : FALSE,
            'message' => $save ? 'Blog tersimpan' : 'Blog gagal tersimpan'
        ));
    }
    
}