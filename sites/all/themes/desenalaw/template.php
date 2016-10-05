<?php
function desenalaw_preprocess_page(&$vars)
{
    if (request_path() == 'contact')
    {
        $googleMapsAPIKey = 'AIzaSyDzMhdB1eRFcpPFxwe4A0FG7M7FGc0YtVY';
        drupal_add_js("https://maps.googleapis.com/maps/api/js?key=$googleMapsAPIKey", 'external');
    }
}
?>

