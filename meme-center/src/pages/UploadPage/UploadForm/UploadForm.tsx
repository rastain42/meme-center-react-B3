import { UploadFormContainer } from './styles'
import { Controller, useForm, useFormContext } from 'react-hook-form'
import { Input } from '../../../components/Input'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { UploadData, UploadSchema } from '..'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function UploadForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <UploadFormContainer>
      <div className="row">
        <Input
          placeholder="Rue"
          className="rue"
          {...register('street')}
          error={errors.street?.message}
        />
      </div>
      <div className="row">
        <Input
          type="number"
          placeholder="Numero de rue"
          {...register('number')}
          error={errors.number?.message}
        />
        <Input
          placeholder="Complément d'adresse"
          className="complement"
          {...register('complement')}
          error={errors.complement?.message}
          rightText="optionnel"
        />
      </div>
      <div className="row">
        <Input
          placeholder="Région"
          {...register('region')}
          error={errors.district?.message}
        />
        <Input
          placeholder="Ville"
          className="city"
          {...register('city')}
          error={errors.city?.message}
        />
        <Input
          placeholder="Code Postal"
          className="cp"
          {...register('cp')}
          error={errors.cp?.message}
        />
      </div>
    </UploadFormContainer>
  )
}


export const UploaddForm = () => {

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<UploadData>({
    resolver: zodResolver(UploadSchema),
  });

  const image = watch('image');
  const imagePreview = image ? URL.createObjectURL(image) : null;

  // revoke object URL to avoid memory leaks
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const onSubmitHandler = async (data: UploadData) => {
    console.log(data);

    // build FormData for uploading image
    const formData = new FormData();
    formData.append('file', data.image);

    // mock upload image to server to get image url
    const imageUrl = await new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('https://via.placeholder.com/150');
      }, 1000);
    });
    // create product
    console.log({ ...data, image: imageUrl });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <UploadFormContainer>

        <div className="row">
          <Input
            placeholder="Titre"
            className="Titre"
            {...register('name')}
          />
        </div>
        <div className="row">
          <Input
            placeholder="Categories"
            className="Categories (séparées d'un espace) "
            {...register('categories')}
          />
        </div>

        <div className="row">
          <input {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="row">
          <Controller
            name="image"
            control={control}
            render={({ field: { ref, name, onBlur, onChange } }) => (
              <input
                type="file"
                ref={ref}
                name={name}
                onBlur={onBlur}
                onChange={(e) => onChange(e.target.files?.[0])}
              />
            )}
          />
          {imagePreview && <img src={imagePreview} alt="preview" />}
          {errors.image && <span>{errors.image.message}</span>}
        </div>
        <div className="row">
          <button type="submit" disabled={!isDirty || isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </UploadFormContainer>
    </form>
  );
};