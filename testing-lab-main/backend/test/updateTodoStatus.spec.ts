import { describe, test, expect, vi } from 'vitest'
import * as TodoRepo from '../src/repo/todo'
import * as services from '../src/services/todo'

describe('Update Todo Status Testing', () => {
  test('When updateTodoStatus is called with a todo ID and new status, it should update the todo status', async () => {
    // Arrange
    const fakeTodoId = 'fakeId'
    const fakeNewStatus = true
    const fakeUpdatedTodo = { id: fakeTodoId, status: fakeNewStatus }

    // Stub the updateTodoById function in the repo to return a fake updated todo
    vi.spyOn(TodoRepo, 'updateTodoById').mockImplementation(async (id, update) => {
      // Assert the parameters passed to the function
      expect(id).toBe(fakeTodoId)
      expect(update.status).toBe(fakeNewStatus)

      return fakeUpdatedTodo
    })

    // Act
    const updatedTodo = await services.updateTodoStatus(fakeTodoId, fakeNewStatus)

    // Assert
    expect(updatedTodo).toEqual(fakeUpdatedTodo)
  })
})