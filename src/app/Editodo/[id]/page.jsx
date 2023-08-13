"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Page = ({ params }) => {
  const id = params.id;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify({
        id,
        title,
        description,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    router.push("/");
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/todo/" + id);
      const json = await res.json();

      if (!json) {
        router.push("/404");
        return;
      }
      setTitle(json.todo.title);
      setDescription(json.todo.description);
    };
    getData();
  }, [id, router]);

  const cancelBtn = () => {
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="container sm:max-w-[425px]   justify-center items-center">
        <CardHeader className=" font-bold items-center justify-between">
          Edit Todo
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-1.5">
            <form
              className=" mx-auto pt-5 flex flex-col gap-2"
              onSubmit={handleSubmit}
            >
              <Label htmlFor="editTodoTitle">Edit Todo Title</Label>
              <Textarea
                id="editTodoTitle"
                type="text"
                placeholder="Todo Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-4  p-2 rounded-md"
              />
              <Label htmlFor="editTodoDescription">Edit Todo Description</Label>
              <Textarea
                id="editTodoDescription"
                type="text"
                placeholder="Todo Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border-4 p-2 rounded-md outline-8"
              />
              <Button variant="">Update</Button>
              <Button onClick={cancelBtn}>Cancel</Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
