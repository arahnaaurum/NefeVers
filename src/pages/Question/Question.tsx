import { useParams } from "react-router";
import { Answers, StyledQuestion } from "./styled";
import { ANSWERS, Paths, QUESTIONS } from "../../utils/constants";
import Image from "../../components/UI/Image/Image";
import { useStore } from "../../store";
import QLink, { QLinkType } from "../../components/UI/Link/QLink";

const Question = () => {
  const { questionId } = useParams();
  if (!questionId || +questionId > QUESTIONS.length) return;
  const qId = +questionId;
  const question = QUESTIONS.find((question) => question.id === qId);
  const answerOptions = ANSWERS[qId - 1];

  const { answers, giveAnswer } = useStore();
  
  return (
    <StyledQuestion>
      <div>
        <h2>
          {qId}: <span>{question?.text}</span>
        </h2>
        <Answers>
          {answerOptions.map(({ text, image, char }, i) => (
            <li key={i} onClick={() => giveAnswer(char, qId - 1)}>
                <figure className={answers[qId - 1] === char? "checked" : ""}>
                  <Image src={image}/>
                  <figcaption>{text}</figcaption>
                </figure>
            </li>
          ))}
        </Answers>
      </div>

      <div className="navigation">
        <div>
          {qId > 1 && (
            <QLink
              path={`${Paths.QUESTION}${qId - 1}`}
              type={QLinkType.SECONDARY}
              text={"<<"}
            />
          )}
        </div>

        <div>
          {answers[qId - 1] && (
            <QLink
              path={
                qId === QUESTIONS.length
                  ? Paths.FINISH
                  : `${Paths.QUESTION}${qId + 1}`
              }
              type={QLinkType.SECONDARY}
              text={qId === QUESTIONS.length ? "UwU" : ">>"}
            />
          )}
        </div>
      </div>
    </StyledQuestion>
  );
};

export default Question;
