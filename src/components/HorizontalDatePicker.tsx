import dayjs, { Dayjs } from "dayjs";
import { For, createSignal } from "solid-js";
import { Flex, HStack, panda } from "../../panda-system/jsx";
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
  const [selectedDate, setSelectedDate] = createSignal(dayjs());

  return (
    <HStack overflow="hidden">
      <For each={weekDays}>
        {(week) => (
          <panda.div width="screen">
            <For each={week}>
              {(day) => (
                <HorizontalDatePickerButton>
                  <span>{day.format("ddd")}</span>
                  <span>{day.format("DD")}</span>
                </HorizontalDatePickerButton>
              )}
            </For>
          </panda.div>
        )}
      </For>
    </HStack>
  );
};
