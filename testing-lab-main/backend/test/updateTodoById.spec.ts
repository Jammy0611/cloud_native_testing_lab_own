import { describe, test, expect, vi } from 'vitest'
import * as TodoRepo from '../src/repo/todo'

describe('Update Todo by ID Testing', () => {
  test('Given a todo ID and update object, When updateTodoById is called, Then it should return the updated todo', async () => {
    // Arrange
    const todoId = '512557018jimmy'
    const updatedTodo = { title: 'Updated Todo', description: 'Updated description', completed: true }
    const mockUpdatedTodo = { ...updatedTodo, _id: todoId } // Simulated updated todo with ID
    vi.spyOn(TodoRepo, 'updateTodoById').mockImplementation(async () => mockUpdatedTodo)

    // Act
    const result = await TodoRepo.updateTodoById(todoId, updatedTodo)

    // Assert
    expect(result).toEqual(mockUpdatedTodo)
  })

  test('Given a non-existing todo ID and update object, When updateTodoById is called, Then it should return null', async () => {
    // Arrange
    const nonExistingTodoId = 'nonExistingId'
    const updatedTodo = { title: 'Updated Todo', description: 'Updated description', completed: true }
    vi.spyOn(TodoRepo, 'updateTodoById').mockImplementation(async () => null)

    // Act
    const result = await TodoRepo.updateTodoById(nonExistingTodoId, updatedTodo)

    // Assert
    expect(result).toBeNull()
  })
})