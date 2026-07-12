import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import SafeImage from "@/components/shared/SafeImage/SafeImage";
import { EditCarsModal } from "@/components/ui/my-added-cars/EditCarsModal";

export default async function MyAddedCars() {
  // Getting the userId
  const { user } = (await auth.api.getSession({ headers: await headers() }) ?? {});
  const userId = await user?.id;
  console.log("The userId we are getting by the server component is: ", userId);

  //Fetching the data
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URI}/my-added-cars?userId=${userId}`,
  );
  const myAddedCars = await res.json();

  return (
    <>
      <section className="">
        <div className="cssContainer flex flex-col gap-16">
          <h1 className="text-center">List of Cars Added by You</h1>

          {(myAddedCars.length > 0) ? <div className="grid grid-cols-2 gap-6 w-fit mx-auto">
            {myAddedCars.map((car) => (
              <Card key={`${car?._id}`} className="flex flex-row border border-gray-500/10 bg-white gap-6">
                <div className="aspect-4/3 max-w-[320px] overflow-hidden bg-muted">
                  <SafeImage
                    src={car?.PhotoUrl}
                    alt={car?.carName || "Car Image"}
                    width={120}
                    height={120}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4">

                <Card.Header className="gap-2">
                  <Card.Title className="text-blue-900 text-2xl!">{car.carName}</Card.Title>
                  <Card.Description className="text-blue-700">{car.availabilityStatus}</Card.Description>
                </Card.Header>
                <Card.Content className="flex-row gap-4">
                  <EditCarsModal></EditCarsModal>
                  <Button variant="danger">Delete</Button>
                </Card.Content>
                </div>
              </Card>
            ))}
          </div>: <p className="">You have not added any car yet.</p>}



        </div>
      </section>

    </>
  );
}
