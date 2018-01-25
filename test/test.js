

  casper.test.begin('my test', function suite(test) {
    casper.start("your url", function() {
        test.assertTitle("'HFU Angular Project");
    });
    casper.run(function() {
        test.done();
    });
});