<template>
  <div class="post-form">
    <div>
      <div class="image-input" v-on:click="removeImageHandler">
        <input
          type="file"
          accept="image/*"
          v-on:change="selectImageHandler"
          ref="imageInput"
        />
        <img v-if="image" v-bind:src="image" />
        <span v-else>SELECIONAR IMAGEM</span>
      </div>
    </div>
    <div class="form-inputs">
      <span>Titulo</span>
      <input class="text-input" type="text" v-model="title" />
      <span>Descrição</span>
      <textarea class="text-input" v-model="description" />
      <span class="alert" v-if="alert">{{ alert }}</span>
      <button v-if="id" v-on:click="updateAddClickHandler">ATUALIZAR</button>
      <button v-else v-on:click="updateAddClickHandler">ADCIONAR</button>
    </div>
  </div>
</template>

<script>
import postService from "../services/post-service";
import imageService from "../services/image-service";
import postSchema from "../validation/post-schema";
import userRepository from "../repositories/user-repository";

export default {
  name: "ViewPost",
  props: ["id"],
  data: () => {
    return {
      title: "",
      description: "",
      image: null,
      alert: null,
    };
  },
  methods: {
    removeImageHandler() {
      this.image = null;
    },
    async selectImageHandler(e) {
      const file = this.$refs.imageInput.files[0];
      if (file) {
        const result = await imageService.add(file);
        if (result.isSuccess()) {
          this.image = result.value;
        } else {
          console.error(result.error);
        }
      } else {
        this.image = null;
      }
    },
    async updateAddClickHandler() {
      this.alert = null;
      const post = {
        title: this.title,
        description: this.description,
        image: this.image,
        org: { id: userRepository.getSession().ongid },
      };

      const validation = postSchema.validate(post);
      if (validation.error) {
        this.alertValidation(validation);
      } else {
        let result;
        if (this.id == null) {
          result = await postService.add(post);
        } else {
          result = await postService.update(this.id, post);
        }
        if (result.isSuccess()) {
          this.$router.push("/posts");
        } else {
          console.error(result.error);
        }
      }
    },
    alertValidation(validation) {
      const field = validation.error.details[0].context.key;
      switch (field) {
        case "title":
          this.alert = "O titulo deve conter 3 a 30 caracteres alfanumericos";
          break;
        case "description":
          this.alert = "A descrição deve ter 3 a 250 caracteres alfanumericos";
          break;
        case "image":
          this.alert = "Uma imagem deve ser selecionada";
          break;
        default:
          console.error("validation error for field: " + field);
          break;
      }
    },
    async loadPost() {
      const result = await postService.find(this.id);
      if (result.isSuccess()) {
        const post = result.value;
        this.title = post.title;
        this.description = post.description;
        this.image = post.image;
      }
    },
  },
  async mounted() {
    if (this.id != null) {
      this.loadPost();
    }
  },
};
</script>

<style lang="scss" scoped>
@use "../styles/base.scss";

$image-size: 250px;

.post-form {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: auto;
  margin-top: 100px;
  background-color: base.$color-background-surface;
  max-width: 800px;
  padding: 10px;
  border-radius: 10px;
  filter: base.$shadow-card;
}

.image-input {
  width: $image-size;
  height: $image-size;
  border-radius: 5px;
  background-color: base.$color-background-secondary;
  font-size: 18px;
  font-family: base.$font-headline;
  text-align: center;
  line-height: $image-size;
}

.image-input img {
  width: $image-size;
  height: $image-size;
}

.image span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.image-input input {
  position: absolute;
  width: $image-size;
  height: $image-size;
  opacity: 0;
}

.remove-image {
  font-size: 14px;
  font-family: base.$font-headline;
}

.form-inputs {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 380px;
}

.form-inputs span {
  display: block;
}

.form-inputs textarea {
  flex-grow: 1;
}

.form-inputs button {
  color: base.$color-white-text-100;
  align-self: flex-end;
  background-color: base.$color-status-success;
  font-size: 20px;
  font-family: base.$font-headline;
  border-width: 0;
  border-radius: 5px;
  padding: 3px 5px;
}

.form-inputs.text-input {
  display: block;
  font-size: 15px;
  font-family: base.$font-body;
  width: 100%;
  box-sizing: border-box;
}

.alert {
  color: base.$color-status-error;
}
</style>