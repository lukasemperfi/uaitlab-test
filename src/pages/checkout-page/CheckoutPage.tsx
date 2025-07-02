import cn from "classnames";
import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import styles from "./CheckoutPage.module.css";
import { ProductCard } from "../../shared/ui/product-card";

import { SearchIcon } from "../../shared/icons";
import { CaretDownIcon } from "../../shared/icons/CaretDownIcon";
import { RadioInput } from "../../shared/ui/radio-input";
import { PriceSummary } from "./PriceSummary";
import { Button } from "../../shared/ui/button";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import { useNavigate } from "react-router";
import * as Field from "../../shared/ui/input";

// Order interface based on product card data
export interface OrderItem {
  id: number;
  name: string;
  price: number; // price per unit
  costLabel: string; // e.g. "собівартість за од."
  image: string; // image hash or url
  quantity: number;
}

// Form data interface
interface CheckoutFormData {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  city: string;
  departmentNumber: string;
  contactMethod: string;
  phoneContact: string;
  viberContact: string;
  telegramContact: string;
  whatsappContact: string;
  signalContact: string;
}

const orders: OrderItem[] = [
  {
    id: 1,
    name: "Тубус для двох споряджених шприців",
    price: 10,
    costLabel: "собівартість за од.",
    image: "",
    quantity: 7,
  },
  {
    id: 2,
    name: "Тубус для двох споряджених шприців",
    price: 10,
    costLabel: "собівартість за од.",
    image: "",
    quantity: 7,
  },
  {
    id: 3,
    name: "Тубус для двох споряджених шприців",
    price: 10,
    costLabel: "собівартість за од.",
    image: "",
    quantity: 7,
  },
];

export const CheckoutPage = () => {
  const methods = useForm<CheckoutFormData>({
    defaultValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      phone: "",
      city: "",
      departmentNumber: "",
      contactMethod: "phone",
    },
    mode: "all",
  });
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const navigate = useNavigate();
  const { handleSubmit, watch, setValue } = methods;

  // Get the current value
  const selectedContactMethod = watch("contactMethod");

  // Handler for manual setValue (if needed)
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue("contactMethod", event.target.value);
  };

  const contextForm = {
    ...methods,
    selectedContactMethod,
    handleRadioChange,
  };

  const onSubmit = () => {
    navigate("/checkout/success");
  };

  return (
    <FormProvider {...contextForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.checkoutPage}>
        <div className={styles.containerOuter}>
          {isDesktop && (
            <div className={styles.desktopWrapper}>
              <section className={cn(styles.section, styles.col1)}>
                <h1 className={styles.sectionMainTitle}>Оформити замовлення</h1>
              </section>

              <main className={styles.col2}>
                <ContactFieldsSection />

                <DeliverySection />
                <ContactMethodSection
                  selectedContactMethod={selectedContactMethod}
                  handleRadioChange={handleRadioChange}
                />
              </main>

              <aside className={styles.col3}>
                <OrdersSection />/
                <SummarySection />
              </aside>
            </div>
          )}
          {!isDesktop && (
            <div className={styles.mobileWrapper}>
              <OrdersSection />

              <ContactFieldsSection />

              <DeliverySection />

              <ContactMethodSection
                selectedContactMethod={selectedContactMethod}
                handleRadioChange={handleRadioChange}
              />

              <SummarySection />
            </div>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

///////////////////////////////

const OrdersSection = () => (
  <section className={cn(styles.section, styles.orders)}>
    <div className={cn(styles.sectionTitle, styles.ordersTitle)}>
      Передзамовлення
    </div>
    <div className={styles.sectionBody}>
      <OrdersList orders={orders} />
    </div>
  </section>
);

interface OrdersListProps {
  orders: OrderItem[];
}

const OrdersList = ({ orders }: OrdersListProps) => (
  <div className={styles.ordersList}>
    {orders.map((order) => (
      <ProductCard
        key={order.id}
        title={order.name}
        price={order.price}
        quantity={order.quantity}
        onQuantityChange={() => {}}
        onDelete={() => {}}
        image={order.image}
      />
    ))}
  </div>
);

interface ContactMethodSectionProps {
  selectedContactMethod: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactMethodSection = ({
  selectedContactMethod,
  handleRadioChange,
}: ContactMethodSectionProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className={cn(styles.section, styles.contactMethod)}>
      <div className={styles.sectionTitle}>Зручний метод зв'язку</div>
      <div className={styles.sectionBody}>
        <div className={styles.contactMethodsList}>
          <RadioInput
            label="Номер телефону"
            name="contactMethod"
            value="phone"
            checked={selectedContactMethod === "phone"}
            onChange={handleRadioChange}
            // {...register("contactMethod")}
          />
          <RadioInput
            label="Viber"
            name="contactMethod"
            value="viber"
            checked={selectedContactMethod === "viber"}
            onChange={handleRadioChange}
            // {...register("contactMethod")}
          />
          <RadioInput
            label="Telegram"
            name="contactMethod"
            value="telegram"
            checked={selectedContactMethod === "telegram"}
            onChange={handleRadioChange}
            // {...register("contactMethod")}
          />
          <RadioInput
            label="WhatsApp"
            name="contactMethod"
            value="whatsapp"
            checked={selectedContactMethod === "whatsapp"}
            onChange={handleRadioChange}
            // {...register("contactMethod")}
          />
          <RadioInput
            label="Signal"
            name="contactMethod"
            value="signal"
            checked={selectedContactMethod === "signal"}
            onChange={handleRadioChange}
            // {...register("contactMethod")}
          />
        </div>

        {/* Phone Input */}
        {selectedContactMethod === "phone" && (
          <Field.Root invalid={!!errors.phoneContact}>
            <Field.Label>Номер телефону</Field.Label>
            <Field.Input
              type="tel"
              placeholder="+380"
              {...register("phoneContact", {
                required: "Номер телефону обов'язковий",
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: "Введіть коректний номер телефону (+380XXXXXXXXX)",
                },
              })}
            />
            {errors.phoneContact && (
              <Field.ErrorText
                message={errors.phoneContact.message as string}
              />
            )}
          </Field.Root>
        )}

        {/* Viber Input */}
        {selectedContactMethod === "viber" && (
          <Field.Root invalid={!!errors.viberContact}>
            <Field.Label>Viber</Field.Label>
            <Field.Input
              type="text"
              placeholder="Viber username"
              {...register("viberContact", {
                required: "Viber username обов'язковий",
                minLength: {
                  value: 3,
                  message: "Мінімум 3 символи",
                },
              })}
            />
            {errors.viberContact && (
              <Field.ErrorText
                message={errors.viberContact.message as string}
              />
            )}
          </Field.Root>
        )}

        {/* Telegram Input */}
        {selectedContactMethod === "telegram" && (
          <Field.Root invalid={!!errors.telegramContact}>
            <Field.Label>Telegram</Field.Label>
            <Field.Input
              type="text"
              placeholder="@username"
              {...register("telegramContact", {
                required: "Telegram username обов'язковий",
                pattern: {
                  value: /^@[a-zA-Z0-9_]{5,}$/,
                  message: "Введіть коректний Telegram username (@username)",
                },
              })}
            />
            {errors.telegramContact && (
              <Field.ErrorText
                message={errors.telegramContact.message as string}
              />
            )}
          </Field.Root>
        )}

        {/* WhatsApp Input */}
        {selectedContactMethod === "whatsapp" && (
          <Field.Root invalid={!!errors.whatsappContact}>
            <Field.Label>WhatsApp</Field.Label>
            <Field.Input
              type="tel"
              placeholder="+380"
              {...register("whatsappContact", {
                required: "WhatsApp номер обов'язковий",
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: "Введіть коректний номер телефону (+380XXXXXXXXX)",
                },
              })}
            />
            {errors.whatsappContact && (
              <Field.ErrorText
                message={errors.whatsappContact.message as string}
              />
            )}
          </Field.Root>
        )}

        {/* Signal Input */}
        {selectedContactMethod === "signal" && (
          <Field.Root invalid={!!errors.signalContact}>
            <Field.Label>Signal</Field.Label>
            <Field.Input
              type="tel"
              placeholder="+380"
              {...register("signalContact", {
                required: "Signal номер обов'язковий",
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: "Введіть коректний номер телефону (+380XXXXXXXXX)",
                },
              })}
            />
            {errors.signalContact && (
              <Field.ErrorText
                message={errors.signalContact.message as string}
              />
            )}
          </Field.Root>
        )}
      </div>
    </section>
  );
};

const SummarySection = () => {
  const {
    formState: { isValid },
  } = useFormContext();

  return (
    <section className={cn(styles.section, styles.summary)}>
      <div className={styles.sectionBody}>
        <PriceSummary cost={100} />
        <hr className={styles.summarySeparator} />
        <Button type="submit" color="blue" disabled={!isValid}>
          Підтвердити
        </Button>
        <Button
          type="button"
          color="blue"
          variant="secondary"
          disabled={!isValid}
        >
          Підтвердити та підтримати
        </Button>
        <div className={styles.summaryText}>
          Залиште заявку — ми зв'яжемось із вами для уточнення деталей і
          підтвердження замовлення. Жодної передоплати до підтвердження. Все
          просто і чесно.
        </div>
      </div>
    </section>
  );
};

interface ContactFieldsSectionProps {
  // errors: FieldErrors<CheckoutFormData>;
  // register: UseFormRegister<CheckoutFormData>;
}

const ContactFieldsSection = ({}: // errors,
// register,
ContactFieldsSectionProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className={cn(styles.section, styles.contacts)}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Контакти замовника</h2>
      </div>
      <div className={styles.sectionBody}>
        <div className={styles.fieldsList}>
          <Field.Root
            className={styles.fieldsListItem}
            invalid={!!errors.lastName}
          >
            <Field.Label>Призвище</Field.Label>
            <Field.Input
              placeholder="Введіть призвище"
              {...register("lastName", {
                required: "Призвище обов'язкове",
                minLength: {
                  value: 2,
                  message: "Мінімум 2 символи",
                },
              })}
            />
            {errors.lastName && (
              <Field.ErrorText message={errors?.lastName?.message as string} />
            )}
          </Field.Root>

          <Field.Root
            className={styles.fieldsListItem}
            invalid={!!errors.firstName}
          >
            <Field.Label>Ім'я</Field.Label>
            <Field.Input
              placeholder="Введіть ім'я"
              {...register("firstName", {
                required: "Ім'я обов'язкове",
                minLength: {
                  value: 2,
                  message: "Мінімум 2 символи",
                },
              })}
            />
            {errors.firstName && (
              <Field.ErrorText message={errors.firstName.message as string} />
            )}
          </Field.Root>

          <Field.Root
            className={styles.fieldsListItem}
            invalid={!!errors.middleName}
          >
            <Field.Label>По-батькові</Field.Label>
            <Field.Input
              placeholder="Введіть по-батькові"
              {...register("middleName", {
                required: "По-батькові обов'язкове",
                minLength: {
                  value: 2,
                  message: "Мінімум 2 символи",
                },
              })}
            />
            {errors.middleName && (
              <Field.ErrorText message={errors.middleName.message as string} />
            )}
          </Field.Root>

          <Field.Root
            className={styles.fieldsListItem}
            invalid={!!errors.phone}
          >
            <Field.Label>Номер телефону</Field.Label>
            <Field.Input
              placeholder="+380"
              {...register("phone", {
                required: "Номер телефону обов'язковий",
                pattern: {
                  value: /^\+380\d{9}$/,
                  message: "Введіть коректний номер телефону (+380XXXXXXXXX)",
                },
              })}
            />
            {errors.phone && (
              <Field.ErrorText message={errors.phone.message as string} />
            )}
          </Field.Root>
        </div>
      </div>
    </section>
  );
};

const DeliverySection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className={cn(styles.section, styles.delivery)}>
      <div className={styles.sectionTitle}>Доставка</div>
      <div className={styles.sectionBody}>
        <div className={styles.fieldsList}>
          <Field.Root invalid={!!errors.city}>
            <Field.Label>Місто / Населений пункт</Field.Label>
            <Field.Input
              placeholder="Введіть місто / Населений пункт"
              {...register("city", {
                required: "Місто обов'язкове",
                minLength: {
                  value: 2,
                  message: "Мінімум 2 символи",
                },
              })}
              endButton={
                <button type="button">
                  <SearchIcon />
                </button>
              }
            />
            {errors.city && (
              <Field.ErrorText message={errors.city.message as string} />
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.departmentNumber}>
            <Field.Label>Номер відділення</Field.Label>
            <Field.Input
              placeholder="Оберіть номер відділення НП"
              {...register("departmentNumber", {
                required: "Номер відділення обов'язковий",
              })}
              endIcon={<CaretDownIcon />}
            />
            {errors.departmentNumber && (
              <Field.ErrorText
                message={errors.departmentNumber.message as string}
              />
            )}
          </Field.Root>
        </div>
      </div>
    </section>
  );
};
