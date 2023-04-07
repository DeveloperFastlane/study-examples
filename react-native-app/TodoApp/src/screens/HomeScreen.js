import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, TextInput, FAB, Text, List, Portal, Dialog, Button } from 'react-native-paper';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      setInputValue(todo.text);
      setEditingTodo(id);
    }
  };

  const handleUpdateTodo = () => {
    if (editingTodo && inputValue.trim()) {
      setTodos(todos.map((todo) => todo.id === editingTodo ? { ...todo, text: inputValue } : todo));
      setInputValue('');
      setEditingTodo(null);
    }
  };

  const handleCancelUpdate = () => {
    setInputValue('');
    setEditingTodo(null);
  };

  const showEditDialog = (id) => {
    handleEditTodo(id);
    setDialogVisible(true);
  };

  const renderItem = (item) => {
    return (
      <List.Item
        key={item.id}
        title={item.text}
        onPress={() => showEditDialog(item.id)}
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
        label={editingTodo ? 'Edit task' : 'Add a task'}
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.input}
      />
      {editingTodo ? (
        <View style={styles.editButtons}>
          <Button onPress={handleUpdateTodo}>Save</Button>
          <Button onPress={handleCancelUpdate}>Cancel</Button>
        </View>
      ) : (
        <FAB icon="plus" onPress={handleAddTodo} style={styles.fab} />
      )}
      {todos.map(renderItem)}

      <Portal>
        <Dialog visible={dialogVisible} onDismiss={() => setDialogVisible(false)}>
          <Dialog.Title>Edit Task</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Edit task"
              value={inputValue}
              onChangeText={setInputValue}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => { handleUpdateTodo(); setDialogVisible(false); }}>Save</Button>
            <Button onPress={() => { handleCancelUpdate(); setDialogVisible(false); }}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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
  editButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;