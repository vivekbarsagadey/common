/**
 * Created by vivek_000 on 10/01/2017.
 */

QUnit.test( "String isNotBlank Test", function( assert ) {
    assert.ok( isNotBlank("Test"), "isNotBlank is Passed!" );
    assert.notOk( isNotBlank(), "isNotBlank must need input as string" );
});


QUnit.test( "String isBlank Test", function( assert ) {
    assert.ok( isBlank(), "isBlank is Passed!" );
});


