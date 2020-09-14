<?php
/*
  Plugin Name: Register Work Post Type
  Plugin URI: 
  Description: Register Custom post type with a label called Work
  Version: 0.1
  Author: Peter
  Author URI: https://peteson.me
  License: GPL2
*/
 
function register_work_type() {
 
    $labels = array(
        'name'                => _x( 'Work', 'Post Type General Name', 'designer-portfolio' ),
        'singular_name'       => _x( 'Work', 'Post Type Singular Name', 'designer-portfolio' ),
        'menu_name'           => __( 'Work', 'designer-portfolio' ),
        'parent_item_colon'   => __( 'Parent Work', 'designer-portfolio' ),
        'all_items'           => __( 'All Work', 'designer-portfolio' ),
        'view_item'           => __( 'View Work', 'designer-portfolio' ),
        'add_new_item'        => __( 'Add New Work', 'designer-portfolio' ),
        'add_new'             => __( 'Add New', 'designer-portfolio' ),
        'edit_item'           => __( 'Edit Work', 'designer-portfolio' ),
        'update_item'         => __( 'Update Work', 'designer-portfolio' ),
        'search_items'        => __( 'Search Work', 'designer-portfolio' ),
        'not_found'           => __( 'Not Found', 'designer-portfolio' ),
        'not_found_in_trash'  => __( 'Not found in Trash', 'designer-portfolio' ),
    );
                
    $args = array(
        'label'               => __( 'work', 'designer-portfolio' ),
        'description'         => __( 'Work Portfolio', 'designer-portfolio' ),
        'labels'              => $labels,
        'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', ),
        'taxonomies'          => array( 'genres' ),
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'menu_position'       => 5,
        'can_export'          => true,
        'has_archive'         => true,
        'exclude_from_search' => false,
        'publicly_queryable'  => true,
        'capability_type'     => 'post',
        'show_in_rest' => true,
        'rewrite'     => array( 'slug' => 'work' ),
    );
        
    register_post_type( 'design_work', $args );
    
}
    
add_action( 'init', 'register_work_type', 0 );