<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {

    // Test get_mean method
    public function test_get_mean() {
        $tempTracker = new TempTracker;
        $tempTracker->insert(55);
        $tempTracker->insert(45);
        $tempTracker->insert(50);
        $this->assertEquals($tempTracker->get_mean(), 50.0);
    }

    // Test get_min method
    public function test_get_min() {
        $tempTracker = new TempTracker;
        $tempTracker->insert(55);
        $tempTracker->insert(45);
        $tempTracker->insert(50);
        $this->assertEquals($tempTracker->get_min(), 45.0);
    }

    // Test get_max method
    public function test_get_max() {
        $tempTracker = new TempTracker;
        $tempTracker->insert(55);
        $tempTracker->insert(45);
        $tempTracker->insert(50);
        $this->assertEquals($tempTracker->get_max(), 55.0);
    }
}