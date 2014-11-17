Studio = require('../../compiled/core/studio');

describe("An actor", function() {
  var SENDER_ID = 'sender',
    RECEIVER_UNDEF_ID = 'undef',
    RECEIVER_BOOLEAN_ID = 'boolean',
    RECEIVER_BOOLEAN_RESULT = true,
    RECEIVER_NUMBER_ID = 'number',
    RECEIVER_NUMBER_RESULT = 1,
    RECEIVER_STRING_ID = 'string',
    RECEIVER_STRING_RESULT = 'test',
    RECEIVER_DATE_ID = 'date',
    RECEIVER_DATE_RESULT = new Date(),
    RECEIVER_OBJECT_ID = 'object',
    RECEIVER_OBJECT_RESULT = {};
  var sender = new Studio.Actor({
    id: SENDER_ID,
    process: function(message, sender) {}
  });
  var receiverUndef = new Studio.Actor({
    id: RECEIVER_UNDEF_ID,
    process: function(message, sender) {}
  });
  var receiverBoolean = new Studio.Actor({
    id: RECEIVER_BOOLEAN_ID,
    process: function(message, sender) {
      return RECEIVER_BOOLEAN_RESULT;
    }
  });
  var receiverNumber = new Studio.Actor({
    id: RECEIVER_NUMBER_ID,
    process: function(message, sender) {
      return RECEIVER_NUMBER_RESULT;
    }
  });
  var receiverString = new Studio.Actor({
    id: RECEIVER_STRING_ID,
    process: function(message, sender) {
      return RECEIVER_STRING_RESULT;
    }
  });
  var receiverDate = new Studio.Actor({
    id: RECEIVER_DATE_ID,
    process: function(message, sender) {
      return RECEIVER_DATE_RESULT;
    }
  });
  var receiverObject = new Studio.Actor({
    id: RECEIVER_OBJECT_ID,
    process: function(message, sender) {
      return RECEIVER_OBJECT_RESULT;
    }
  });
  it("should receive a message", function(done) {
    sender.send(RECEIVER_UNDEF_ID, 'hello').then(function(result) {
      expect(result).toBeUndefined();
      done();
    });
  });
  it("should be able to return a boolean", function(done) {
    sender.send(RECEIVER_BOOLEAN_ID, 'hello').then(function(result) {
      expect(result).toBe(RECEIVER_BOOLEAN_RESULT);
      done();
    });
  });
  it("should be able to return a number", function(done) {
    sender.send(RECEIVER_NUMBER_ID, 'hello').then(function(result) {
      expect(result).toBe(RECEIVER_NUMBER_RESULT);
      done();
    });
  });
  it("should be able to return a string", function(done) {
    sender.send(RECEIVER_STRING_ID, 'hello').then(function(result) {
      expect(result).toBe(RECEIVER_STRING_RESULT);
      done();
    });
  });
  it("should be able to return a date", function(done) {
    sender.send(RECEIVER_DATE_ID, 'hello').then(function(result) {
      expect(result).toBe(RECEIVER_DATE_RESULT);
      done();
    });
  });
  it("should be able to return an object", function(done) {
    sender.send(RECEIVER_OBJECT_ID, 'hello').then(function(result) {
      expect(result).toBe(RECEIVER_OBJECT_RESULT);
      done();
    });
  });
});