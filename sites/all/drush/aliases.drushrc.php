<?php
$aliases['dev'] = array(
	'uri'=> 'desenalaw.ccistaging.com',
	'root' => '/home/staging/subdomains/desenalaw/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);

$aliases['olddev'] = array(
        'uri'=> 'desenalaw.ccistaging.com',
        'root' => '/home/desena/subdomains/staging/public_html',
        'remote-host'=> 'host.ccistudios.com',
        'remote-user'=> 'desena',
        'path-aliases'=> array(
                '%files'=> 'sites/default/files',
        ),
        'ssh-options'=>'-p 37241'
);
