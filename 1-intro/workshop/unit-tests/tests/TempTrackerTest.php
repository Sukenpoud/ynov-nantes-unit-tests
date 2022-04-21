<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {

    // Test insert method with wrong type as arg
    public function test_insert_wrong_typing(){
        $tempTracker = new TempTracker;       
        $result = $tempTracker->insert('text');
        $this->expectException(\TypeError::class);
    }

}