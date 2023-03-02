function disableUsedOptions($table) {
    $selects = $table.find("select");
    $selects.on("change", function() {
        $selects = $table.find("select");

        console.log("In table:");
        console.log($table);
        console.log("there are " + $selects.length + " selects");
        if ($selects.length <= 1) return;
        let selected = [];

        $selects.each(function(index, select) {
            if (select.value !== "") {
                selected.push(select.value);
            }
        });

        console.log("option values, that are being deactivated: " + selected);

        $table.find("option").prop("disabled", false);
        for (var index in selected) {
            $table
                .find('option[value="' + selected[index] + '"]:not(:selected)')
                .prop("disabled", true);
        }
    });
    $selects.trigger("change");
}

$tables = $("table");
$tables.each(function(index) {
    $table = $(this);
    disableUsedOptions($table);
});
