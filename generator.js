const javascriptGenerator = Blockly.JavaScript;

javascriptGenerator['pet_start'] = function(block) {
    return "let energy = 50; let hunger = 50; let log = '';\n";
};

javascriptGenerator['pet_feed'] = function(block) {
    return "hunger -= 20; log += 'Pet ate an apple. Hunger decreased.\\n';\n";
};

javascriptGenerator['pet_play'] = function(block) {
    return "energy -= 30; hunger += 10; log += 'Pet played ball! Energy down, hunger up.\\n';\n";
};

javascriptGenerator['pet_sleep'] = function(block) {
    const hours = javascriptGenerator.valueToCode(block, 'HOURS', javascriptGenerator.ORDER_ATOMIC) || 0;
    return `energy += ${hours} * 10; log += 'Pet slept for ${hours} hours. Energy recovered.\\n';\n`;
};

javascriptGenerator['pet_status_check'] = function(block) {
    return "log += `Current Status -> Energy: ${energy}, Hunger: ${hunger}\\n`;\n";
};

javascriptGenerator['pet_mood'] = function(block) {
    return "log += 'Pet says: Woof! I feel great!\\n';\n";
};