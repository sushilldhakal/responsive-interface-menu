<?php
add_action( 'admin_menu', 'responsive_interface_menu' );

/** Step 1. */
function responsive_interface_menu() {
		add_menu_page('My Plugin Options', 'Responsive Interface Menu', 'manage_options', 'responsive-interface-menu', 'my_plugin_options' );
}

/** Step 3. */
function my_plugin_options() {
	if ( !current_user_can( 'manage_options' ) )  {
		wp_die( __( 'You do not have sufficient permissions to access this page.' ) );
	}
	echo '<div id="responsive-interface-menu" class="wrap-menu">';
	//echo '<p>Here is where the form would go if I actually had options.</p>';
	include dirname(__FILE__) . '/mainfile.php';
	echo '</div>';
}
function responsive_interface_menu_scripts_admin() 
{
    wp_enqueue_style( 'responsive-interface-menu-admin-css', plugins_url( '/src/css/admin/style.css', __FILE__ ) );
    wp_enqueue_script( 'responsive-interface-menu-admin-js', plugins_url( '/src/js/admin/script.js', __FILE__ ), array('jquery'), '', true );
}
add_action('admin_enqueue_scripts', 'responsive_interface_menu_scripts_admin');

function responsive_interface_menu_scripts_front_end() {

    wp_enqueue_style('responsive-interface-front-end-css', plugins_url( '/src/css/front-end/main.css', __FILE__ ));

    wp_enqueue_script('responsive-interface-front-end-js', plugins_url( '/src/js/front-end/main.js', __FILE__ ));
}
add_action('wp_head', 'responsive_interface_menu_scripts_front_end');

