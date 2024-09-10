import { useEffect, useState } from "react";
import { useStore } from "../../store";
import { Char, Result } from "../../utils/types";
import QLink, { QLinkType } from "../../components/UI/Link/QLink";
import { StyledFinish } from "./styled";
import { Paths, RESULTS } from "../../utils/constants";

const headerText = "Сегодня вы...";
const btnText = "Повторить";

const Finish = () => {
  const { answers } = useStore();
  const results = {
    [Char.LAR]: 0,
    [Char.NEF]: 0,
    [Char.NEI]: 0,
    [Char.SEL]: 0,
    [Char.UNO]: 0,
  };

  const [result, setResult] = useState <Result | undefined>();

  useEffect(() => {
    if (answers && answers.length) {
      let char: Char | undefined = undefined;
      answers.forEach((answer) => (results[answer] = results[answer] + 1));
      for (const [key, value] of Object.entries(results)) {
        if (!char || results[char] < value) char = key as Char;
      }
      setResult(RESULTS.find((res) => res.id === char));
    }
  }, [answers, results]);

  return (
    <StyledFinish>
      <div className="answer">
        <h2>{headerText} {result?.name}</h2>
        <p> {result?.text} </p>
      </div>
      <QLink
        path={`${Paths.START}`}
        type={QLinkType.PRIMARY}
        text={btnText}
      />
    </StyledFinish>
  );
};

export default Finish;
