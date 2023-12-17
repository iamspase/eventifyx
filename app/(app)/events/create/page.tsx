import CreateEventForm from "@/components/Forms/CreateEventForm/CreateEventForm";

export default function CreateEventPage(): JSX.Element {
  return (
    <main className="container py-12">
      <h1 className="text-xl font-bold text-zinc-200">Create an event</h1>
      <p className="text-zinc-500 font-medium">Planning an event soon? Post it here and let everyone know about it.</p>

      <CreateEventForm />
    </main>
  )
}