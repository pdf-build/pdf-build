import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ file }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: file.name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="cursor-grab active:cursor-grabbing"
    >
      <img
        src={URL.createObjectURL(file)}
        alt="preview"
        className="h-32 w-full object-cover rounded border"
      />
    </div>
  );
};

const ImagePreview = ({ images, setImages }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setImages((items) => {
      const oldIndex = items.findIndex((i) => i.name === active.id);
      const newIndex = items.findIndex((i) => i.name === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={images.map((f) => f.name)}>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {images.map((file) => (
            <SortableItem key={file.name} file={file} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ImagePreview;