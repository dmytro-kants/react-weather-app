import { useRef, MouseEvent, ReactNode, useState } from "react";

type DraggableProps = {
  rootClass?: string;
  children: ReactNode;
};

export const Draggable = ({ rootClass = "", children }: DraggableProps) => {
  const ourRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const mouseCoords = useRef<{
    startX: number;
    startY: number;
    scrollLeft: number;
    scrollTop: number;
  }>({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0] as HTMLElement;
    const startX = e.pageX - slider.offsetLeft;
    const startY = e.pageY - slider.offsetTop;
    const scrollLeft = slider.scrollLeft;
    const scrollTop = slider.scrollTop;
    mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0] as HTMLElement;
    const x = e.pageX - slider.offsetLeft;
    const y = e.pageY - slider.offsetTop;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    const walkY = (y - mouseCoords.current.startY) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    slider.scrollTop = mouseCoords.current.scrollTop - walkY;
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      className={rootClass + " flex overflow-x-scroll"}
    >
      {children}
    </div>
  );
};

export default Draggable;
