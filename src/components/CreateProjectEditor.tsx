import { Plus, Upload, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const CreateProjectEditor = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [projectDescription, setProjectDescription] = useState("");

  return (
    <div className="w-full max-w-[1280px]">
      {/* Tab Navigation */}
      <div className="flex flex-row items-center justify-start rounded-xl bg-black/3 p-0.5 mb-6">
        <div className="flex flex-row items-center">
          <button 
            className={`flex h-9 w-26 cursor-pointer items-center justify-center rounded-[10px] text-[14px] sm:w-37 ${
              activeTab === "create" ? "bg-brand text-white" : "text-black/45"
            }`}
            onClick={() => setActiveTab("create")}
          >
            Create
          </button>
          <div className="mx-1 h-5 w-[1px] bg-black/12"></div>
        </div>
        <div className="flex flex-row items-center">
          <button 
            className={`flex h-9 w-26 cursor-pointer items-center justify-center rounded-[10px] text-[14px] sm:w-37 ${
              activeTab === "upload" ? "bg-brand text-white" : "text-black/45"
            }`}
            onClick={() => setActiveTab("upload")}
          >
            Upload
          </button>
          <div className="mx-1 h-5 w-[1px] bg-black/12"></div>
        </div>
        <div className="flex flex-row items-center">
          <button 
            className={`flex h-9 w-26 cursor-pointer items-center justify-center rounded-[10px] text-[14px] sm:w-37 ${
              activeTab === "paste" ? "bg-brand text-white" : "text-black/45"
            }`}
            onClick={() => setActiveTab("paste")}
          >
            Paste Code
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex h-60 w-full flex-col items-center justify-center rounded-[20px] bg-white md:w-4/5 xl:w-3/5 xl:p-0 2xl:w-1/2 mx-auto shadow-lg">
        <div className="relative flex h-full w-full flex-1">
          {activeTab === "create" && <CreateTab projectDescription={projectDescription} setProjectDescription={setProjectDescription} />}
          {activeTab === "upload" && <UploadTab />}
          {activeTab === "paste" && <PasteTab />}
        </div>
      </div>
    </div>
  );
};

const CreateTab = ({ projectDescription, setProjectDescription }: { projectDescription: string, setProjectDescription: (value: string) => void }) => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative flex h-full w-full flex-col items-center justify-between gap-3 p-4">
          <div className="flex w-full flex-1 flex-col gap-3 bg-white">
            <textarea 
              placeholder="Tell me what you want to build — e.g. &quot;Make me a personal portfolio&quot;"
              className="flex-1 resize-none overflow-auto border-none bg-transparent p-1 text-sm outline-none"
              rows={3}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              style={{ resize: "none" }}
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-black/12 transition-colors hover:bg-black/3">
                <Plus className="h-4 w-4 text-black" />
              </button>
              <button className="flex cursor-pointer items-center justify-center gap-1 border px-2 transition-colors hover:bg-black/3 h-9 rounded-[10px] border-black/12">
                <MoreHorizontal className="h-4 w-4 text-black/95" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button 
                disabled={!projectDescription.trim()}
                className={`flex h-9 w-9 items-center justify-center rounded-[10px] transition-colors ${
                  projectDescription.trim() 
                    ? "bg-brand text-white hover:bg-brand/90" 
                    : "cursor-not-allowed bg-black/3 text-black/45"
                }`}
              >
                <Upload className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadTab = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-full max-h-[360px] w-full overflow-hidden rounded-[20px] p-3 text-center transition-all duration-300">
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 rounded-[10px] border border-dashed border-black/12 p-2">
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-[20px] leading-[20px] text-black/95">Drag & Drop Your Creation</h2>
            <p className="text-[14px] text-black/65">HTML or TSX file｜Folder with HTML, CSS, and JS files (＜10 MB)</p>
          </div>
          <div className="max-xs:flex-col max-xs:gap-2 flex flex-row gap-4">
            <button className="flex h-9 w-40 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/65 hover:border-black/3 hover:bg-white hover:shadow-[0_8px_16px_1px_rgba(0,0,0,0.1)]">
              <span className="text-[14px]">Select File</span>
              <Upload className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-40 cursor-pointer items-center justify-center gap-2 rounded-[10px] bg-black/3 text-black/65 hover:border-black/3 hover:bg-white hover:shadow-[0_8px_16px_1px_rgba(0,0,0,0.1)]">
              <span className="text-[14px]">Select Folder</span>
              <Upload className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PasteTab = () => {
  const [code, setCode] = useState("");

  return (
    <div className="flex h-full w-full flex-col p-4">
      <textarea 
        className="h-full flex-1 resize-none border-none p-1 pb-4 text-[14px] text-black/95 placeholder:text-black/30 focus:outline-none"
        placeholder="Paste your HTML or TSX code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className="flex justify-end">
        <button 
          className={`flex h-9 cursor-pointer items-center justify-center rounded-[10px] px-3 text-base ${
            code.trim() 
              ? "bg-brand text-white hover:bg-brand/90" 
              : "cursor-not-allowed bg-black/6 text-black/30"
          }`}
          disabled={!code.trim()}
        >
          Ship It
        </button>
      </div>
    </div>
  );
};

export default CreateProjectEditor;