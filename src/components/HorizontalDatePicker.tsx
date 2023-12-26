import "solid-devtools";

import dayjs, { Dayjs } from "dayjs";
import { For, createSignal } from "solid-js";
import { HStack } from "../../styled-system/jsx";
import { HorizontalDatePickerButton } from "./HorizontalDatePickerButton";

const getDaysFromWeek = (date: Dayjs) => {
  const startOfWeek = date.startOf("week");
  return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
};

const extendedWeekDays = (date: Dayjs) => {
  const nextWeek = date.add(1, "week");
  const previousWeek = date.subtract(1, "week");
  return [
    getDaysFromWeek(previousWeek),
    getDaysFromWeek(date),
    getDaysFromWeek(nextWeek),
  ];
};

export const HorizontalDatePicker = () => {
  const weekDays = extendedWeekDays(dayjs());
  const [selectedDate, setSelectedDate] = createSignal(dayjs().startOf("day"));

  return (
    <>
      <HStack
        gap={4}
        overflowX="auto"
        scrollSnapType="x"
        scrollSnapStrictness="mandatory"
        maxWidth="screen"
        scrollbar="hidden"
      >
        <For each={weekDays}>
          {(week) => (
            <HStack scrollSnapAlign="center" flexShrink={0} width="screen">
              <For each={week}>
                {(day) => (
                  <>
                    <HorizontalDatePickerButton.Root
                      isSelected={day.isSame(selectedDate(), "day")}
                      onClick={() => {
                        setSelectedDate(day);
                      }}
                    >
                      <HorizontalDatePickerButton.Label>
                        {day.format("dddd")}
                      </HorizontalDatePickerButton.Label>
                      <HorizontalDatePickerButton.SubLabel>
                        {day.format("D")}
                      </HorizontalDatePickerButton.SubLabel>
                    </HorizontalDatePickerButton.Root>
                  </>
                )}
              </For>
            </HStack>
          )}
        </For>
      </HStack>
    </>
  );
};
