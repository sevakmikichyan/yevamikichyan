import { Paragraph, Span } from "@/common/components/typography";
import { Button, Radio } from "@/common/components/ui";
import { ColorVariant } from "@/common/types";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "Ո՞ր թվականին է ստեղծվել հայոց այբուբենը։",
    options: ["301թ", "405թ", "451թ", "301-405 թթ միջև"],
    answer: 1, // 405թ
  },
  {
    question: "Ո՞վ էր հայոց այբուբենի ստեղծողը։",
    options: ["Սահակ Պարթև", "Մեսրոպ Մաշտոց", "Եզնիկ Կողբացի", "Գրիգոր Լուսավորիչ"],
    answer: 1, // Մեսրոպ Մաշտոց
  },
  {
    question: "Ինչ նպատակ ուներ Մեսրոպ Մաշտոցը այբուբենի ստեղծման ժամանակ",
    options: [
      "Գրավոր լեզվի հեշտացում",
      "Արևմտյան ազդեցությունը կանխել",
      "Աստվածաշունչը հայերեն թարգմանել և հայ հավատքի հիմքն ամրապնդել",
      "նոր լեզու ստեղծել"
    ],
    answer: 2, // Աստվածաշունչը թարգմանել և հավատքը ամրապնդել
  },
  {
    question: "Քանի տառ ուներ Մեսրոպ Մաշտոցի ստեղծած սկզբնական այբուբենը։",
    options: ["23", "36", "38", "39"],
    answer: 1, // 36 տառ
  }
];

const getScoreData = (score: number): { color: ColorVariant, label: string, icon: string } => {
  if (score === 4) return { color: 'success', label: 'Հիանալի', icon: '✔' };
  if (score === 3) return { color: 'info', label: 'Լավ', icon: 'ⓘ' };
  if (score === 2) return { color: 'warning', label: 'Միջին', icon: '⚠' };
  if (score === 1) return { color: 'error', label: 'Վատ', icon: '✘' };
  return { color: 'error', label: 'Շատ վատ', icon: '✘' };
};

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [score, setScore] = useState<number | null>(null);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  const selectAnswer = (oIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = oIndex;
    setAnswers(newAnswers);
  };

  const next = () => {
    setDirection(1);
    setCurrent(c => c + 1);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent(c => c - 1);
  };

  const finishQuiz = () => {
    let result = 0;
    answers.forEach((a, i) => { if (a === questions[i].answer) result++; });
    setScore(result);
  };

  const startAgain = () => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setScore(null);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0
    })
  };

  if (score !== null) {
    const { color, label, icon } = getScoreData(score);
    return (
      <AnimatePresence custom={1} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <Paragraph size="lg" className="flex items-center md:gap-md gap-sm" color={color}>
              <Span size="2xl" color={color} className="ml-sm flex items-center md:gap-md gap-sm">
                <Span>{icon}</Span>
                {score} / {questions.length}
              </Span>
            </Paragraph>
            <Span color={color} size="xl">{label}</Span>
            <Button className="mt-md" onClick={startAgain}>Սկսել նորից</Button>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  const q = questions[current];

  return (
    <div style={{ padding: 20 }}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          <Paragraph size="lg" className="pb-sm">{current + 1}. {q.question}</Paragraph>

          <div className="flex flex-col items-start gap-sm">
            {q.options.map((opt, oi) => (
              <Radio
                key={oi}
                label={opt}
                name={`q-${current}`}
                checked={answers[current] === oi}
                onChange={() => selectAnswer(oi)}
              />
            ))}
          </div>

          <div className="flex gap-sm mt-md">
            {current > 0 && <Button outlined onClick={prev}>Նախորդ</Button>}
            {current < questions.length - 1 ? (
              <Button onClick={next} disabled={answers[current] === null}>Հաջորդ</Button>
            ) : (
              <Button onClick={finishQuiz} disabled={answers[current] === null}>Ավարտել</Button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Quiz;