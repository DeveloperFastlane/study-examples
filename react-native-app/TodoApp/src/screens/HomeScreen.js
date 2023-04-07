import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, TextInput, FAB, Text, List } from 'react-native-paper';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = (item) => {
    return (
      <List.Item
        key={item.id}
        title={item.text}
        right={() => (
          <IconButton
            icon="delete"
            onPress={() => handleDeleteTodo(item.id)}
          />
        )}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Add a task"
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
      <FAB icon="plus" onPress={handleAddTodo} style={styles.fab} />
      {todos.map(renderItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
