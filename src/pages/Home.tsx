import TaskCard from "@/components/modules/TaskCard";
import { useAppSelector } from "@/hooks/hooks";
import { taskState } from "@/redux/fetcher/tasks";
import type { ITasks } from "@/type";

const Home = () => {
  const tasks = useAppSelector(taskState);
  console.log(tasks);
  return (
    <div>
      {tasks &&
        tasks?.map((item: ITasks) => <TaskCard key={item.id} {...item} />)}
    </div>
  );
};

export default Home;
