import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'

const fakeAnswerRepository: AnswerRepository = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  })

  expect(answer.content).toBe('Nova resposta')
})
