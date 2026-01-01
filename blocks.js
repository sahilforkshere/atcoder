
Blockly.Blocks['pet_start'] = {
  init: function() {
    this.appendDummyInput().appendField("🏁 Start Pet Simulation");
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};


Blockly.Blocks['pet_feed'] = {
  init: function() {
    this.appendDummyInput().appendField("🍎 Feed Pet");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

// 3. Play Block
Blockly.Blocks['pet_play'] = {
  init: function() {
    this.appendDummyInput().appendField("⚽ Play with Pet");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

Blockly.Blocks['pet_sleep'] = {
  init: function() {
    this.appendDummyInput().appendField("💤 Let Pet Sleep");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};


Blockly.Blocks['pet_check_health'] = {
  init: function() {
    this.appendDummyInput().appendField("🔍 Check overall health");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
  }
};


Blockly.Blocks['pet_set_mood'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Mood to")
        .appendField(new Blockly.FieldDropdown([["Happy","HAPPY"], ["Tired","TIRED"], ["Hungry","HUNGRY"]]), "MOOD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
  }
};


javascript.javascriptGenerator.forBlock['pet_start'] = () => "printResult('--- Simulation Started ---');\n";
javascript.javascriptGenerator.forBlock['pet_feed'] = () => "printResult('Pet ate an apple. Energy +10.');\n";
javascript.javascriptGenerator.forBlock['pet_play'] = () => "printResult('Pet played fetch. Happiness +20.');\n";
javascript.javascriptGenerator.forBlock['pet_sleep'] = () => "printResult('Pet is resting. Health recovering...');\n";
javascript.javascriptGenerator.forBlock['pet_check_health'] = () => "printResult('Status: All vitals look good!');\n";
javascript.javascriptGenerator.forBlock['pet_set_mood'] = (block) => {
    const mood = block.getFieldValue('MOOD');
    return `printResult('Mood set to: ${mood}');\n`;
};