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


QUnit.test( "String getValue Test", function( assert ) {
    assert.equal( getValue(null,10),10, "Value is updated" );
    assert.equal( getValue("",10),10, "Empty Value is updated" );
    assert.equal( getValue(300,10),300, "String Value is updated" );
    assert.equal( getValue("Old Value",10),"Old Value", "Value is not updated" );
});


