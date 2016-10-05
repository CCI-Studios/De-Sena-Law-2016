<?php
$aliases['dev'] = array(
	'uri'=> 'staging.desenalaw.com',
	'root' => '/home/desena/subdomains/staging/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'desena',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);