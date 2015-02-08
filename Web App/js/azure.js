var MobileServiceClient = WindowsAzure.MobileServiceClient;
var client = new MobileServiceClient('https://smart911.azure-mobile.net/', 'BzZgXdhGMSCVImXrVDOEgKrHlgIBSH19');
var items=client.getTable('item');
alert(items.getTableName());
//items.insert("Stuff");
//alert(JSON.stringify(items.lookup(1)));
/*
var query = items.where({
    complete: false
}).read().done(function (results) {
    alert(JSON.stringify(results));
}, function (err) {
    alert("Error: " + err);
});
*/