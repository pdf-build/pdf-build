import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortablePdfItem = ({ file }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: file.name });

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
      className="flex items-center gap-4 p-4 border rounded cursor-grab active:cursor-grabbing bg-white"
    >
      <div className="text-2xl">📄</div>

      <div className="flex-1">
        <p className="font-medium truncate">{file.name}</p>
        <p className="text-xs text-gray-500">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>
      </div>
    </div>
  );
};

const PdfPreview = ({ files, setFiles }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setFiles((items) => {
      const oldIndex = items.findIndex((f) => f.name === active.id);
      const newIndex = items.findIndex((f) => f.name === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={files.map((f) => f.name)}>
        <div className="mt-6 space-y-3">
          {files.map((file) => (
            <SortablePdfItem key={file.name} file={file} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default PdfPreview;
