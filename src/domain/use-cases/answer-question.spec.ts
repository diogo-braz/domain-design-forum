import { AnswerQuestionUseCase } from "./answer-question";
import { AnswerRepository } from "@/domain/repositories/answers-repository";
import { Answer } from "@/domain/entities/answer";

const fakeAnswerRepository: AnswerRepository = {
  create: async (answer: Answer) => {
    return;
  }
};

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository);

  const answer = await answerQuestion.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Nova resposta',
  });

  expect(answer.content).toBe('Nova resposta');
})
