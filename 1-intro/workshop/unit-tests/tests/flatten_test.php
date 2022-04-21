<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    // Tests with empty lists 
    public function test_with_null()
    {
        $this->assertEquals(flatten([]), [], "Should be []");
        $this->assertEquals(flatten([[]]), [], "Should be []");
    }

    // Tests with a few values in list
    public function test_input_type()
    {
        $this->assertEquals(flatten([1, 2, 3]), [1, 2, 3], "Should be [1, 2, 3]");
    }

    // Tests with lists nested few times in list
    public function test_nested_multiple(()
    {
        $this->assertEquals(flatten([4, [5, [6, 7]], [1, 2, 3]]), [4, 5, 6, 7, 1, 2, 3], "Should be [4, 5, 6, 7, 1, 2, 3]");
    }
}